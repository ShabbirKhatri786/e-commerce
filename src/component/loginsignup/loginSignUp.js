import React, { useState } from 'react';
import { MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdb-react-ui-kit';

function LoginSignUp({ closeModal }) { // Accept closeModal prop

  const [justifyActive, setJustifyActive] = useState('tab1');
  
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <MDBModal show={true} setShow={closeModal} tabIndex="-1">
      <MDBModalHeader>
        <button onClick={closeModal} className="btn-close" aria-label="Close"></button>
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === 'tab1'}>
              <div className="text-center mb-3">
                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              </div>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>
              <div className="text-center mb-3">
                <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
              </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </MDBModalBody>
      <MDBModalFooter>
        {/* Footer Content If Needed */}
      </MDBModalFooter>
    </MDBModal>
  );
}

export default LoginSignUp;
