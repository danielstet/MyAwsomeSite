import shirt from '../../assets/ShirtForShowCase.png'

const Item = () => {
  return (
    <div id="Item">
        <img id="ItemImage" alt="" src={shirt} width={300} height={300}></img>
        <p For='ItemImage'>Header</p>
        <p>Price</p>
    </div>
  )
}

export default Item