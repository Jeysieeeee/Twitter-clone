import * as React from "react"
import { AntDesign } from '@expo/vector-icons';

interface AppleProps{
    color:string;
    size:number;
}
const AppleIcon = ({color, size} :AppleProps) => (
  <AntDesign name="apple1" size={size} color={color} />
)

export default AppleIcon
