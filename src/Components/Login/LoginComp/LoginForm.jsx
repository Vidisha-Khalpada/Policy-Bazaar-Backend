import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { loginAction } from "../Redux/Login/loginAction";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  VStack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const url=process.env.REACT_APP_URL
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
    name: "",
  });

  const dispatch = useDispatch();
  const Navigate=useNavigate()
  const toast = useToast({ position: "top" });

  const handleValuedInput = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    if (inputState.email.length == 0) {
      toast({
        title: `Invalid Email. Enter Correct One`,
        status: "error",
        isClosable: true,
      });
      return;
    } else if (inputState.password.length < 4) {
      toast({
        title: `Password should be over 4 characters.`,
        status: "error",
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    isValidUser()
  };

  const isValidUser = () => {
    let present = false;
    axios.post(`${url}/api/login`,inputState,{
      headers:{
        "Content-Type":"application/json"
      }
    }).then((res)=>
    {
      if(res.data.token)
      {
        localStorage.setItem("authtoken",res.data.token)
        localStorage.setItem("name",res.data.name)
        setLoading(false);
        setSubmissionStatus(true);
        setTimeout(() => {
        setSubmissionStatus(false);
        }, 3000);
        Navigate("/")
      }
      else
      {
        setLoading(false)
        toast({
          title: `Error! Login failed. Please recheck the email and password and try again.`,
          status: "error",
          isClosable: true,
        });
      }
      
    })
    
    
    // allUsers.forEach((ele) => {
    //   if (
    //     inputState.email === ele.email &&
    //     inputState.password === ele.password
    //   ) {
    //     present = true;
    //     const user = {
    //       isAuth: true,
    //       name: ele.name,
    //       email: ele.email,
    //     };
    //     sessionStorage.setItem("loggedInUserInfo", JSON.stringify(user));
    //     setLoading(false);
    //     setSubmissionStatus(true);
    //     setTimeout(() => {
    //       setSubmissionStatus(false);
    //       loginAction(user, dispatch);
    //     }, 3000);
    //   }
    // });
    // setLoading(false);
    return present;
  };

  // const getAllUser = async () => {
  //   try {
  //     let res = await fetch(`https://mock-server-app-6y5e.onrender.com/regUser`);
  //     let resData = await res.json();
  //     setAllUsers(resData);
  //   } catch (error) {
  //     console.log(error);
  //     toast({
  //       title: `There was an error processing your request`,
  //       status: "error",
  //       isClosable: true,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   getAllUser();
  // }, []);

  if (submissionStatus) {
    return (
      <>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="1g">
            Login Success!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            You have been successfully logged into Policybazaar!
          </AlertDescription>
        </Alert>
      </>
    );
  }

  return (
    <div>
      <VStack spacing={6} align="flex-start">
        <FormControl isInvalid={inputState.email.length > 10}>
          <InputGroup>
            
            <Input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleValuedInput}
            />
          </InputGroup>
          
        </FormControl>

        <FormControl
          isInvalid={
            inputState.password.length > 0 && inputState.password.length < 4
          }
        >
          <Input
            type={"password"}
            placeholder="Enter Password"
            maxlength="10"
            name="password"
            onChange={handleValuedInput}
          ></Input>

          <FormErrorMessage>
            {"Password should be over 4 characters."}
          </FormErrorMessage>
        </FormControl>
        <Button
          isLoading={loading}
          loadingText="Submitting"
          type="submit"
          colorScheme="blue"
          w="full"
          onClick={handleFormSubmit}
        >
          Sign in
        </Button>
      </VStack>
    </div>
  );
}
export default LoginForm;
