import { render, screen } from '@testing-library/react';
import HeroWithMockData from './HeroWithMockData';

describe('HeroWithMockData Component', () => {
    test('renders without crashing', () => {
        render(<HeroWithMockData todos_completed={0} total_todos={0} />);
        expect(screen.getByText(/Task Done/i)).toBeInTheDocument();
    });

    test('displays correct completed and total tasks', () => {
        render(<HeroWithMockData todos_completed={5} total_todos={10} />);
        expect(screen.getByText(/5\/10/i)).toBeInTheDocument();
    });

    test('displays completed tasks as 0 if none completed', () => {
        render(<HeroWithMockData todos_completed={0} total_todos={5} />);
        expect(screen.getByText(/0\/5/i)).toBeInTheDocument();
    });

    test('displays total tasks as 0 if none exists', () => {
        render(<HeroWithMockData todos_completed={0} total_todos={0} />);
        expect(screen.getByText(/0\/0/i)).toBeInTheDocument();
    });

    test('displays "Keep It Up" text', () => {
        render(<HeroWithMockData todos_completed={3} total_todos={5} />);
        expect(screen.getByText(/Keep It Up/i)).toBeInTheDocument();
    });

    test('displays correct number of tasks completed with varying inputs', () => {
        render(<HeroWithMockData todos_completed={1} total_todos={1} />);
        expect(screen.getByText(/1\/1/i)).toBeInTheDocument();
        render(<HeroWithMockData todos_completed={3} total_todos={4} />);
        expect(screen.getByText(/3\/4/i)).toBeInTheDocument();
        render(<HeroWithMockData todos_completed={2} total_todos={3} />);
        expect(screen.getByText(/2\/3/i)).toBeInTheDocument();
    });

    test('displays tasks as completed when more than 0 total', () => {
        render(<HeroWithMockData todos_completed={2} total_todos={2} />);
        expect(screen.getByText(/2\/2/i)).toBeInTheDocument();
    });

    test('displays tasks as partially completed', () => {
        render(<HeroWithMockData todos_completed={1} total_todos={2} />);
        expect(screen.getByText(/1\/2/i)).toBeInTheDocument();
    });

    test('displays completed tasks correctly when total tasks change', () => {
        const { rerender } = render(<HeroWithMockData todos_completed={2} total_todos={4} />);
        expect(screen.getByText(/2\/4/i)).toBeInTheDocument();
        rerender(<HeroWithMockData todos_completed={3} total_todos={5} />);
        expect(screen.getByText(/3\/5/i)).toBeInTheDocument();
    });

    test('handles large numbers correctly', () => {
        render(<HeroWithMockData todos_completed={1000} total_todos={1000} />);
        expect(screen.getByText(/1000\/1000/i)).toBeInTheDocument();
        render(<HeroWithMockData todos_completed={999} total_todos={1000} />);
        expect(screen.getByText(/999\/1000/i)).toBeInTheDocument();
    });

    test('displays "Task Done" text', () => {
        render(<HeroWithMockData todos_completed={2} total_todos={3} />);
        expect(screen.getByText(/Task Done/i)).toBeInTheDocument();
    });

    test('shows zero completed tasks if no tasks exist', () => {
        render(<HeroWithMockData todos_completed={0} total_todos={0} />);
        expect(screen.getByText(/0\/0/i)).toBeInTheDocument();
    });

    test('does not crash with negative numbers', () => {
        render(<HeroWithMockData todos_completed={-1} total_todos={0} />);
        expect(screen.getByText(/-1\/0/i)).toBeInTheDocument();
    });
});
