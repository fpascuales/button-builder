import { Button, Flex, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react';
import './Sidebar.scss';
import { useContext } from 'react';
import { MyContext } from '../../shared/Context/Context';
import { HexAlphaColorPicker } from 'react-colorful';
const Sidebar = () => {

  const { setState } = useContext(MyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTextAlignChange = (e) => {
    setState( { textAlign: e.target.value });
  };

  const handleTextDecorationChange = (e) => {
    setState( { textDecoration: e.target.value});
  };

  const handleTextTransformChange = (e) => {
    setState( { textTransform: e.target.value});
  };

  const handleBackGroundColorChange = (color) => {
    setState( { backgroundColor: color });
  };

  const textAlignOptions = [
    {value: 'left', label: 'Left'},
    {value: 'center', label: 'Center'},
    {value: 'right', label: 'Right'},
    {value: 'justify', label: 'Justify'}
  ];
  
  const textDecorationOptions = [
    {value: 'none', label: 'None'},
    {value: 'underline', label: 'Underline'},
    {value: 'overline', label: 'Overline'},
    {value: 'line-through', label: 'Line Through'},
    {value: 'blink', label: 'Blink'}
  ];

  const textTransformOptions = [
    {value: 'none', label: 'None'},
    {value: 'capitalize', label: 'Capitalize'},
    {value: 'uppercase', label: 'Uppercase'},
    {value: 'lowercase', label: 'LowerCase'},
    {value: 'initial', label: 'Initial'},
    {value: 'inherit', label: 'Inherit'}
  ];
  
  return (
    <Flex height={'100vh'} width={'20%'} flexDirection={'column'}>
      <Flex gap={6}>
        <Flex alignItems={'center'} gap={1}>
          <Text>Width</Text>
          <Input onChange={(e) => setState({width: e.target.value})} width={20} paddingX={1} textAlign={'center'}/>
          <Text>px</Text>
        </Flex>
        <Flex alignItems={'center'} gap={1}>
          <Text>Height</Text>
          <Input onChange={(e) => setState({height: e.target.value})} width={20} paddingX={1} textAlign={'center'}/>
          <Text>px</Text>
        </Flex> 
      </Flex>

      <Flex alignItems={'center'} gap={4}>
        <Text>Margin</Text>
        <Input onChange={(e) => setState({marginTop: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='top'/>
        <Input onChange={(e) => setState({marginRight: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='right'/>
        <Input onChange={(e) => setState({marginBottom: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='bottom'/>
        <Input onChange={(e) => setState({marginLeft: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='left'/>
        <Text>px</Text>
      </Flex>

      <Flex alignItems={'center'} gap={4}>
        <Text>Padding</Text>
        <Input onChange={(e) => setState({paddingTop: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='top'/>
        <Input onChange={(e) => setState({paddingRight: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='right'/>
        <Input onChange={(e) => setState({paddingBottom: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='bottom'/>
        <Input onChange={(e) => setState({paddingLeft: e.target.value})} width={10} paddingX={1} textAlign={'center'} placeholder='left'/>
        <Text>px</Text>
      </Flex>

      <Flex alignItems={'center'} gap={4}>
        <Text>Font Size</Text>
        <Input onChange={(e) => setState({fontSize: e.target.value})} width={20} paddingX={1} textAlign={'center'}/>
        <Text>px</Text>
      </Flex>

      <Flex alignItems={'center'} gap={4}>
        <Text>Font Weight</Text>
        <Input onChange={(e) => setState({fontWeight: e.target.value})} width={20} paddingX={1} textAlign={'center'}/>
      </Flex>

      <Flex alignItems={'center'} gap={4}>
        <Text>Text Align</Text>
        <Select onChange={handleTextAlignChange} textAlign={'center'}>
          {textAlignOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex alignItems={'center'} gap={4}>
        <Text>Text Decoration</Text>
        <Select onChange={handleTextDecorationChange} textAlign={'center'}>
          {textDecorationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>
      
      <Flex alignItems={'center'} gap={4}>
        <Text>Text Transform</Text>
        <Select onChange={handleTextTransformChange} textAlign={'center'}>
          {textTransformOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Flex>

      <Button onClick={onOpen}>
        Background Color
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'xs'}>
          <ModalOverlay/>
          <ModalContent>
            <ModalCloseButton/>
            <HexAlphaColorPicker onChange={(color) => handleBackGroundColorChange(color)}/>
          </ModalContent>
      </Modal>

    </Flex>
  )
}

export default Sidebar