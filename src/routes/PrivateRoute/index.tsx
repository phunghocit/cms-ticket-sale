
interface Props {
    page?:any
  }
const PrivateRoute = ({page}:Props) => {

    return(
        <div>{page}</div>
    )
}

export default PrivateRoute;