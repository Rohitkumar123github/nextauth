import React from 'react'

export default function FileInput() {
  return (
    <div>
        <form >
            <label htmlFor="myfile">Select files:</label>
            <input type="file" id="myfile" name="myfile" multiple />
            {/* <input type="submit"> */}
        </form>
    </div>
  )
}
