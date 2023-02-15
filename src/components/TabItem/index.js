import './index.css'

const TabItem = props => {
  const {TabeachItem, eachTabClick, isActive} = props
  const {displayText, tabId} = TabeachItem

  const onTabClick = () => {
    eachTabClick(tabId)
  }
  const updateTab = isActive ? 'button-style button-app' : 'button-app'

  return (
    <li className="list-tab">
      <button type="button" className={updateTab} onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
