const HeroWithMockData = ({ todos_completed, total_todos }) => {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep It Up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
};

export default HeroWithMockData;
