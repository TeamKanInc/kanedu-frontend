import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";

interface Props {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title?: string;
  description?: string;

}

const ContainerComponent = ({ id, children, title, description}: Props) => {
  const {
    attributes,
    setNodeRef,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });
  return (
    <div {...attributes} ref={setNodeRef}>
      <div>{"se debe centrar los objetos"}
        <div> <h1>{title}</h1></div>{"flex column y un gap"}
      </div>
      {children}
    </div>
  );
};

export default ContainerComponent;
