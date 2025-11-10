

export interface AddFormProps {
  hidden: boolean
}
export const AddForm = ({
  hidden = true
}) => {
  if(hidden){
    return;
  }
  
  return (
    <h1>Heylà</h1>
  )
}