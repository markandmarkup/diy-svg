import EditPane from "../components/EditPane/EditPane"
import Toolbox from "../components/Toolbox/Toolbox"
import Workspace from "../components/Workspace/Workspace"

function AppPage() {
  return (
    <div>
      <Toolbox />
      <Workspace />
      <EditPane />
    </div>
  )
}

export default AppPage
