import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";

export default function Projects() {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong..</p>;

  if (data?.projects.length === 0) {
    return <h3>No projects here..</h3>;
  }

  return (
    <>
      <div className="row mt-5">
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
