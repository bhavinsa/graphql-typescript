import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { projects, tasks, ProjectData } from "../data";
import Project from "../schemas/Project";

@Resolver(of => Project)
export default class {
  @Query(returns => Project, { nullable: true })
  projectByName(@Arg("name") name: string): ProjectData | undefined {
    return projects.find(project => project.name === name);
  }

  @Query(returns => Project, { nullable: true })
  projectById(@Arg("id") id: number): ProjectData | undefined {
    return projects.find(project => project.id === id);
  }

  @Query(returns => [Project], { nullable: true })
  project(): ProjectData[] | undefined {
    return projects;
  }

  @FieldResolver()
  tasks(@Root() projectData: ProjectData) {
    return tasks.filter(task => {
      return task.project_id === projectData.id;
    });
  }
}
