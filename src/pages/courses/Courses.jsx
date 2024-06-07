import useDataFetching from "../../hooks/useDataFetching";

const Courses = () => {
        // data fetching 
        const { data: courses } = useDataFetching('/api/courses')
        console.log('courses data',courses);
    return (
        <div>
            ss
        </div>
    );
};

export default Courses;