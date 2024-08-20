import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from '@dnd-kit/sortable';

interface Props {
  id: UniqueIdentifier;
  title: string;
  description: string;
  urgency: string;
  //assignedTo: string;
}

const Task = ({ id, title,description,urgency}: Props) => {

    const {
        attributes,
        listeners,
        setNodeRef,
       // isDragging,
      } = useSortable({
        id: id,
        data: {
          type: 'item',
        },
      });
  return (
 <div
 ref={setNodeRef}
      {...attributes}
 >
    <div {...listeners} >
       <h1>{title}</h1> 
       <span>{urgency}</span>
       <span>{description}</span>
    </div>
 </div>
);
};

export default Task;
