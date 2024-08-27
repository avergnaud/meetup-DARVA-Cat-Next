export default function Post(props) {
    return (
        <tr>
          <td>{props.userId}</td>
          <td id={props.id + '_title'}>{props.title}</td>
          <td>{props.body}</td>
        </tr>
    );
};