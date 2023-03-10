import * as React from "react"
import { AntDesign } from '@expo/vector-icons';

interface AppleProps{
    width: number;
    height: number;
}
const AppleIcon = ({} :AppleProps) => (
  <AntDesign name="apple1" size={30} color="black" />
)

export default AppleIcon
