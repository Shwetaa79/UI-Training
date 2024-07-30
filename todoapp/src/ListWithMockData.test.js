import { render, screen } from '@testing-library/react';
import ListWithMockData from './ListWithMockData';
import userEvent from '@testing-library/user-event';

const mockData = [
    {
        id: 1,
        first_name: "Shweta",
        last_name: "Ullala",
        email: "shweta@test.com"
    },
    {
        id: 2,
        first_name: "A",
        last_name: "B",
        email: "A@test.com"
    },
    {
        id: 3,
        first_name: "C",
        last_name: "D",
        email: "C@test.com"
    }
];

describe('ListWithMockData Component', () => {
    test('renders without crashing', () => {
        render(<ListWithMockData data={mockData} handleClick={() => {}} />);
        expect(screen.getByText(/Shweta/i)).toBeInTheDocument();
    });

    test('renders all items from mock data', () => {
        render(<ListWithMockData data={mockData} handleClick={() => {}} />);
        expect(screen.getByText(/Shweta Ullala/i)).toBeInTheDocument();
        expect(screen.getByText(/A B/i)).toBeInTheDocument();
        expect(screen.getByText(/C D/i)).toBeInTheDocument();
    });

    test('renders email links correctly', () => {
        render(<ListWithMockData data={mockData} handleClick={() => {}} />);
        
        // Use getAllByText and assert the count if necessary
        expect(screen.getAllByText(/shweta@test.com/i)).toHaveLength(1);
        expect(screen.getAllByText(/A@test.com/i)).toHaveLength(1);
        expect(screen.getAllByText(/C@test.com/i)).toHaveLength(1);
    });

    test('calls handleClick with the correct email when an email link is clicked', async () => {
        const mockHandleClick = jest.fn();
        render(<ListWithMockData data={mockData} handleClick={mockHandleClick} />);

        await userEvent.click(screen.getByText(/shweta@test.com/i));
        expect(mockHandleClick).toHaveBeenCalledWith('shweta@test.com');
        
        await userEvent.click(screen.getByText(/A@test.com/i));
        expect(mockHandleClick).toHaveBeenCalledWith('A@test.com');
    });

    test('displays correct ID, first name, and last name for each item', () => {
        render(<ListWithMockData data={mockData} handleClick={() => {}} />);
        expect(screen.getByText(/1 - Shweta Ullala/i)).toBeInTheDocument();
        expect(screen.getByText(/2 - A B/i)).toBeInTheDocument();
        expect(screen.getByText(/3 - C D/i)).toBeInTheDocument();
    });

    test('displays a message when no data is provided', () => {
        render(<ListWithMockData data={[]} handleClick={() => {}} />);
        expect(screen.queryByText(/Shweta/i)).not.toBeInTheDocument();
    });

    test('handles click event without crashing', async () => {
        const mockHandleClick = jest.fn();
        render(<ListWithMockData data={mockData} handleClick={mockHandleClick} />);
        
        await userEvent.click(screen.getByText(/shweta@test.com/i));
        expect(mockHandleClick).toHaveBeenCalled();
    });

    test('renders email link as an anchor tag', () => {
        render(<ListWithMockData data={mockData} handleClick={() => {}} />);
        const emailLink = screen.getByText(/shweta@test.com/i);
        expect(emailLink.closest('a')).toBeInTheDocument();
    });

    test('displays no email link if data is empty', () => {
        render(<ListWithMockData data={[]} handleClick={() => {}} />);
        expect(screen.queryByText(/shweta@test.com/i)).not.toBeInTheDocument();
    });

    test('handles large datasets correctly', () => {
        const largeMockData = Array.from({ length: 100 }, (_, i) => ({
            id: i + 1,
            first_name: `First${i + 1}`,
            last_name: `Last${i + 1}`,
            email: `user${i + 1}@test.com`
        }));
        
        render(<ListWithMockData data={largeMockData} handleClick={() => {}} />);
        expect(screen.getByText(/First1 Last1/i)).toBeInTheDocument();
        expect(screen.getByText(/user1@test.com/i)).toBeInTheDocument();
    });

    test('displays correct number of list items', () => {
        render(<ListWithMockData data={mockData} handleClick={() => {}} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(mockData.length);
    });

    test('updates the UI correctly when data changes', () => {
        const { rerender } = render(<ListWithMockData data={mockData} handleClick={() => {}} />);
        expect(screen.getByText(/Shweta/i)).toBeInTheDocument();

        const newMockData = [
            {
                id: 4,
                first_name: "E",
                last_name: "F",
                email: "E@test.com"
            }
        ];
        
        rerender(<ListWithMockData data={newMockData} handleClick={() => {}} />);
        expect(screen.queryByText(/Shweta/i)).not.toBeInTheDocument();
        expect(screen.getByText(/E/i)).toBeInTheDocument();
    });
});
