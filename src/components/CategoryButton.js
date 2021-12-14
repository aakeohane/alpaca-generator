export default function CategoryButton(props) {
  return (
      <button onClick={props.generateStyleOptions}>{props.name}</button>
  )
}