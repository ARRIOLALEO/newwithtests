import {render,screen} from '@testing-library/react'
import Card from "./Card";

describe('with Card',()=>{
    it('should render the card with proper information',async()=>{
        render(<Card data={{title:"ZF Partners With BEEP To Bring Robo-Shuttle To Market"}}/>)
        await screen.findByText(/ZF Partners With BEEP To Bring Robo-Shuttle To Market/i)
    })
})