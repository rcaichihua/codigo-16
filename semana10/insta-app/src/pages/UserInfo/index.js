import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {searchUser} from "../../services";

const UserInfo = () => {
const [userData, setUserData] = useState({});

  const {username} = useParams();

  const fetchUserData = async () => {
    const {success, data} = await searchUser(username);

    if(success){
      setUserData(data);
    }

  };

  useEffect(() =>{
fetchUserData();
  },[]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </Container>
    
  );
};

export default UserInfo;