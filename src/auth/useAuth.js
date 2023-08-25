import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const {
    doctorID,
    setDoctorID,
    name,
    setName,
    lname,
    owner,
    ownerSecretKey,
    setLName,
    email,
    setEmail,
    role,
    setRole,
    setOwner,
    setOwnerSecretKey,
    staffName,
    setStaffName,
    company,
    setCompany,
    companyFullName,
    setCompanyFullName,
    serviceUnit,
    setServiceUnit,
    dp,
    setDp,
    staffdp,
    setStaffDp,
  } = useContext(AuthContext);

  const logIn = (
    id,
    name,
    lname,
    email,
    role,
    owner,
    ownerSecretKey,
    staffName,
    company,
    company_name,
    serviceUnit,
    dp,
    staffdp
  ) => {
    setDoctorID(id);
    setName(name);
    setLName(lname);
    setEmail(email);
    setRole(role);
    setOwner(owner);
    setOwnerSecretKey(ownerSecretKey);
    setStaffName(staffName);
    setCompany(company);
    setCompanyFullName(company_name);
    setServiceUnit(serviceUnit);
    setDp(dp);
    setStaffDp(staffdp);
    authStorage.storeId(
      id,
      name,
      lname,
      email,
      role,
      owner,
      ownerSecretKey,
      staffName,
      company,
      company_name,
      serviceUnit,
      dp,
      staffdp
    );
  };

  const logOut = () => {
    setDoctorID(null);
    setName(null);
    setLName(null);
    setEmail(null);
    setRole(null);
    setOwner(null);
    setOwnerSecretKey(null);
    setStaffName(null);
    setCompany(null);
    setCompanyFullName(null);
    setServiceUnit(null);
    setDp(null);
    setStaffDp(null);
    authStorage.removeId();
  };
  return {
    doctorID,
    name,
    lname,
    email,
    role,
    owner,
    ownerSecretKey,
    company,
    companyFullName,
    serviceUnit,
    dp,
    staffdp,
    staffName,
    logOut,
    logIn,
  };
};

export default useAuth;
