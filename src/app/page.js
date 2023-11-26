'use client'
import { Heading, Text, Button, Stack } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  ErrorIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Checkbox,

} from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Input,FormControl,FormLabel,Select } from '@chakra-ui/react'
import {ChevronDownIcon,} from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import { Badge } from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  useDisclosure
} from '@chakra-ui/react'

import { Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Heading as='h1' size={'4xl'}>H1 - Nunito Bold 37px</Heading>
      <Heading as='h2' size={'3xl'}>H2 - Nunito Semibold 28px</Heading>
      <Heading as='h3' size={'2xl'}>H3 - Nunito Semibold 21px</Heading>
      <Heading as='h4' size={'xl'}>H4 - Nunito Bold 19px</Heading>
      <Heading as='h5' size={'lg'}>H5 - Nunito Semibold 17px</Heading>
      <Heading as='h6' size={'md'}>H6 - Open Sans Bold 16px</Heading>
      <hr />
      <Text>Open Sans Regular 19px</Text>
      <p>Open Sans Regular 16px</p>
      <small>Open Sans Regular 13px</small>
      <hr />
      <Button m={5} variant={'disabled'} colorScheme={'primary'} isDisabled={true} >Boton</Button>
      <Button m={5} variant={'solid'} colorScheme={'secondary'}>Boton</Button>
      <Button m={5} variant={'solid'} colorScheme={'success'}>Boton</Button>
      <Button m={5} variant={'solid'} colorScheme={'danger'}>Boton</Button>
      <Button m={5} variant={'solid'} colorScheme={'link'}>Boton</Button>

      <Button m={5} variant={'outline'} colorScheme={'success'} >Boton</Button>
      <Button m={5} variant={'outline'} colorScheme={'link'}>Boton</Button>
      <Button m={5} variant={'outline'}>Boton</Button>

      <Stack spacing={3}>
        <Alert status='error'>
          <AlertIcon color={'#C93B3B'} />
          There was an error processing your request
          <CloseButton
            p={0}
            position='absolute'
            right={0}
            top={0}
            margin={'12px 10px'}
          
          />
        </Alert>

        <Alert status='success'>
          <AlertIcon color={'#26874A'} />
          Este es un destacado de una alerta de éxito. Esta es la descripción de una alerta de éxito que continua al texto destacado.Este es un destacado de una alerta de éxito. Esta es la descripción de una alerta de éxito que continua al texto destacado.Este es un destacado de una alerta de éxito. Esta es la descripción de una alerta de éxito que continua al texto destacado.
          <CloseButton
            p={0}
            position='absolute'
            right={0}
            top={0}
            margin={'12px 10px'}
          
          />
        </Alert>

        <Alert status='warning'>
          <AlertIcon color={'#FFA82E'} />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status='info'>
          <AlertIcon color={'#007BC7'} />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>

      <Menu size={'xs'}>
        <MenuButton>
          Desplegable
          <ChevronDownIcon ml={2} />
        </MenuButton>
        <MenuList>
          <MenuItem>Mi cuenta</MenuItem>
          <MenuItem>Opciones</MenuItem>
          <MenuItem>Ir a incidencias</MenuItem>
          <MenuItem>Borrar</MenuItem>
          <MenuItem>Cerrar Session</MenuItem>
        </MenuList>
      </Menu>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Stack direction='row'>
        <Badge >Default</Badge>
        <Badge variant='primary'>Success</Badge>
        <Badge variant='secondary'>Removed</Badge>
        <Badge variant='success'>New</Badge>
        <Badge variant='danger'>New</Badge>
        <Badge variant='warning'>New</Badge>
        <Badge variant='info'>New</Badge>
      </Stack>

      <Modelito />

      <Tooltip hasArrow placement='auto' bg= "#38485C" label="Esto es un tooltip de opcion" aria-label='A tooltip'>
        Hover me
      </Tooltip>
      <Stack>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox>Checkbox</Checkbox>
      </Stack>

      <RadioExample />
      <Input type='datetime-local' placeholder='Basic usage' />
      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select  placeholder='Select country'>
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
    </main>
  )
}

function Modelito() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size={'xl'}>Titular del modal con dos líneas de ejemplo</Heading>
          {/* <Divider /> */}
          </ModalHeader>
          
          <ModalCloseButton />
          <ModalBody>
          Descripción del titular de una tarjeta con contenedor que puede llegar a contener hasta 3 líneas máximo
          </ModalBody>

          <ModalFooter>
            <Button variant='outline' colorScheme='link' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme={'primary'}>Aceptar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


function RadioExample() {
  const [value, setValue] = React.useState('1')
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1'>First</Radio>
        <Radio value='2'>Second</Radio>
        <Radio value='3'>Third</Radio>
      </Stack>
    </RadioGroup>
  )
}