import {render,screen,fireEvent} from '@testing-library/react'
import Dropdown from './Dropdown'

describe('dropdown',()=>{
    it('should render the dropdown',async()=>{
        render(<Dropdown valueDropDown="technology"/>)
         await screen.findByDisplayValue(/technology/i)
         // try to create a test when we change the value
        //  fireEvent.change(screen.getByDisplayValue(/technology/),{target:{value:'business'}})
        //  await screen.findByDisplayValue(/technology/i)
    })
})