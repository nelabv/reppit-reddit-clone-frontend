import React from "react";
import FullViewPost from "../../components/FullViewPost";
import {
  Container
} from "./styles";

function PostFullView(props) {
  const { loading, setLoading } = props;

  return ( 
    <> 
        <Container>
            <FullViewPost loading={loading} setLoading={setLoading}/>
        </Container>  
      </>
  );
}
export default PostFullView;
