import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Signup() {
  return (
    <MDBContainer
      fluid
      className="d-flex w-100 h-100 align-items-center justify-content-center bg-image"
      style={{
        backgroundImage: "url(../../public/wzG.jpg)",
      }}
    >
      <MDBCard
        className="bg-blur py-4 px-1 text-muted"
        style={{ maxWidth: "600px", borderRadius: "3rem"}}
      >
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">ایجاد حساب کاربری</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="نام"
            size="lg"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="ایمیل"
            size="lg"
            id="form2"
            type="email"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="رمز عبور"
            size="lg"
            id="form3"
            type="password"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="تکرار رمز عبور"
            size="lg"
            id="form4"
            type="password"
          />
          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="تمام قوانین را خوانده ام و موافقم"
            />
          </div>
          <MDBBtn className="mb-4 w-100 gradient-custom-4 text-black" size="lg">
            ثبت نام
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
