import { useState, useEffect } from "react";

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

function SignupForm({ gotoPrevious }) {
  const [loading, setLoading] = useState(false);
  const url=process.env.REACT_APP_URL
  const [submissionStatus, setSubmissionStatus] = useState(false);
  // const [allUsers, setAllUsers] = useState([]);
  const [inputState, setInputState] = useState({
    email: "",
    name: "",
    password: "",
  });
  const toast = useToast({ position: "top" });

  const handleValuedInput = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    if (inputState.email.length===0) {
      toast({
        title: `Invalid email. Enter Correct One`,
        status: "error",
        isClosable: true,
      });
      return;
    } else if (inputState.name.length === 0) {
      toast({
        title: `Name is required`,
        status: "warning",
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
    // else if (hasAlreadyRegistered()) {
    //   toast({
    //     title: `This User already exist in our database.`,
    //     status: "success",
    //     isClosable: true,
    //   });
    //   gotoPrevious();
    //   return;
    // } 
    else {
      postData();
    }
  };

  // const hasAlreadyRegistered = () => {
  //   let present = false;
  //   allUsers.map(({ email }) => {
  //     if (email === inputState.email) {
  //       present = true;
  //     }
  //   });
  //   return present;
  // };

  const postData = async () => {
    try {
      setLoading(true);
      let res = await fetch(`${url}/api/register`, {
        method: "POST",
        body: JSON.stringify(inputState),
        headers: { "Content-type": "application/json" },
      });
      // setTimeout(() => {
      //   setLoading(false);
      //   setTimeout(() => {
      //     setSubmissionStatus(false);
      //     gotoPrevious();
      //   }, 2000);
      // }, 2000);
      let message=await res.json()
      if(message.message=="The user has already registered.. Please login to continue..")
      {
        setLoading(false)
        setSubmissionStatus(false)
        toast({
          title: `The user is already registered...Please login to continue`,
          status: "warning",
          isClosable: true
        })
      }
      else
      {
        setLoading(false)
        setSubmissionStatus(true)
        toast({
          title:"Congratulations... Your account has been successfully created!!",
          status:"success",
          isClosable:true
        })
      }
      gotoPrevious()
    } catch (error) {
      console.log(error);
      toast({
        title: `There was an error processing your request`,
        status: "error",
        isClosable: true,
      });
    }
  };
  
  // const getAllUser = async () => {
  //   try {
  //     let res = await fetch(`${url}/api/register`);
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
            Success!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Congratulation, Your Account has been successfully created.
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
              type="text"
              placeholder="Enter your Name"
              name="name"
              onChange={handleValuedInput}
            />
          </InputGroup>
          
        </FormControl>
        <FormControl>
          <Input
            type={"text"}
            placeholder="Enter Your Email"
            name="email"
            onChange={handleValuedInput}
          />
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
          Sign up
        </Button>
      </VStack>
    </div>
  );
}
export default SignupForm;
