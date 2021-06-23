function Highlights({hRef, text}) {
  return (
    <div dangerouslySetInnerHTML={{__html: text}} ref={hRef} className="highlights">
    </div>
  )
}

export default Highlights;
