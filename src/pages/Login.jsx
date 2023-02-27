import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../Context/AuthContextProvider';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const {loginUser} = useContext(AuthContext);

const navigate = useNavigate()

const handleSubmit = (e) => {
e.preventDefault();
fetch("https://reqres.in/api/login", {
  method:"POST",
  headers: {
    "Content-Type":"application/json",
  },
  body:JSON.stringify({email,password}),
})
.then((res)=> res.json())
.then((res)=> {
  if(res.token){
    loginUser(res.token);
    navigate("/Cart");
  }else{
    alert("Wrong Credential")
  }
})
.catch((err)=> {
  console.log(err)
})
}

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Flex>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <Text ml={1} mt={-1} fontSize={'2xl'} as="b">/</Text>
<Link to="/SignUp">
          <Heading color={"blue"} fontSize={'2xl'} as="u">SignUp</Heading>
          </Link>
          </Flex>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input 
            type="email"  
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
         <p>eve.holt@reqres.in</p>

          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>

            <Button colorScheme={'blue'} variant={'solid'}
            onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://cb.scene7.com/is/image/Crate/cb_dHP_20230209_BRV2?wid=1440&qlt=80&op_sharpen=1'
          }
        />
      </Flex>
    </Stack>
  );
}
