import React, {ReactElement} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #121212;
  margin: 20px 0;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 1.3rem;
`;

const RenderComponent = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
`;

const Documentation = styled.table``;




export interface PropDoc {
  prop : string;
  description : string;
  type : string;
  defaultValue : string;
}

export interface iDocumentComponentProps {
  title : string;
  component : ReactElement;
  propDocs : PropDoc[];
}

const DocumentComponent = ( props : iDocumentComponentProps) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Container>
        <RenderComponent>{props.component}</RenderComponent>
        <Documentation>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default value</th>
            </tr>
          </thead>
          <tbody>
            {props.propDocs.map((doc, index) => {
              return (
                <tr key={index}>
                  <td>{doc.prop}</td>
                  <td>{doc.description}</td>
                  <td>{doc.type}</td>
                  <td>
                    <code>{doc.defaultValue}</code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Documentation>
      </Container>
    </Wrapper>
  );
};

export default DocumentComponent;
