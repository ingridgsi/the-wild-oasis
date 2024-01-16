import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "./Button";

const Group = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Empty({ resource }) {
  const moveBack = useMoveBack();
  return (
    <>
      <Group>
        <p>No {resource} could be found.</p>
        <Button variation="secondary" size="small" onClick={moveBack}>
          &larr; Back
        </Button>
      </Group>
    </>
  );
}

export default Empty;
