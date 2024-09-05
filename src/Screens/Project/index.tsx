import { useState } from "react";
import Header from "../../components/ui/Header";
import { useProject } from "../../hooks/kanban/useProject";
import style from "./Project.module.css";
import Modal from "../../components/Kanban/Modal";
import { useModal } from "../../hooks";
import { ButtonComponent, InputComponent } from "../../components";
const Project = () => {
  const { isPending, project } = useProject();
  const { isOpen, openModal, closeModal } = useModal(false);
  const [projectName, setProjectName] = useState("");
  const [members, setMembers] = useState<string[]>([]);
  const [leader, setLeader] = useState("");
  const [area, setArea] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  /*useEffect(() => {
    fetchProjects();
  }, []);
  */

  const handleProject = () => {
    project({
      projectName,
      members,
      leader,
      area,
      endDate,
      description,
      workZone: "",
    });
  };
  return (
    <div>
      <Header />
      <div>
        <h1>Proyectos</h1>
        <div>
          <ButtonComponent onClick={openModal} label={"new project"} />
        </div>

        <Modal
          label="nuevo preoyecto en tu workspace"
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <InputComponent setInfo={setProjectName} label="project name" />
          <InputComponent setInfoList={setMembers} label="Add members" />
          {/* <InputComponent setInfo={setLeader} label="Leader" options={{projects?.map(project => project.name) || []}} /> */}
          <InputComponent setInfo={setArea} label="Area" />
          <InputComponent setInfo={setProjectName} label="project name" />
          <InputComponent setInfo={setEndDate} label="End date" type={"date"} />

          <ButtonComponent onClick={handleProject} label={"confirmar"} />
        </Modal>
      </div>
      <hr />

      <table className={style.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Lider</th>
            <th>Area</th>
            <th>Lider</th>
            <th>Miembros</th>
            <th>Fecha de inicio</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Project;
