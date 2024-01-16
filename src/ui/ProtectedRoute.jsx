import styled from "styled-components";
import { useUser } from "../features/authentication/useUserHook";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2) If there's no authenticated user, redirect to the '/login'
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3) While loading, show the spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4) If there's a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
