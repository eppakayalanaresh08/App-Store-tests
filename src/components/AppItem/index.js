import './index.css'

const AppItem = props => {
  const {AppeachItem} = props
  const {appName, imageUrl} = AppeachItem
  return (
    <li className="list-app">
      <img src={imageUrl} alt={appName} className="app-list" />
      <p className="description-app">{appName}</p>
    </li>
  )
}

export default AppItem
