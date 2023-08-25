import React from "react";
import { gql } from "@apollo/client";
import client from "../config/client";

const getUsers = async () => {
  try {
    const GET_USERS = gql`
      query Query {
        GetUser {
          id
          email
          password
        }
      }
    `;

    const { data, error } = await client.query({ query: GET_USERS });
    if (error) return error;
    return data;
  } catch (error) {
    console.log("catch---", error);
  }
};

const addUser = async (
  email,
  password,
  first_name,
  middle_name,
  last_name,
  entry_reason,
  work_address_line1,
  work_address_line2,
  work_address_city,
  work_address_state,
  work_address_zipCode,
  phone_number,
  group_id,
  is_member,
  organization,
  job_title,
  is_news_subscribed,
  is_public,
  instructor_certificate_status,
  instructor_accredited_date,
  instructor_anniversary_date,
  dietary_restriction,
  dietary_restriction_other,
  adult_certification_date,
  adult_anniversary_date,
  youth_certification_date,
  youth_anniversary_date,
  teen_certification_date,
  teen_anniversary_date,
  sponsor_status,
  primary_organization_name,
  primary_organization_id,
  secondary_organization_name,
  secondary_organization_id,
  tertiary_organization_name,
  tertiary_organization_id
) => {
  console.log("instructor_accredited_date--", instructor_accredited_date);

  const CREATE_USER = gql`
    mutation CreateUser(
      $email: String
      $password: String
      $first_name: String
      $middle_name: String
      $last_name: String
      $entry_reason: Int
      $work_address_line1: String
      $work_address_line2: String
      $work_address_city: String
      $work_address_state: String
      $work_address_zipCode: Int
      $phone_number: String
      $group_id: Int
      $is_member: Boolean
      $organization: String
      $job_title: String
      $is_news_subscribed: Boolean
      $is_public: Boolean
      $instructor_certificate_status: String
      $instructor_accredited_date: String
      $instructor_anniversary_date: String
      $dietary_restriction: String
      $dietary_restriction_other: String
      $adult_certification_date: String
      $adult_anniversary_date: String
      $youth_certification_date: String
      $youth_anniversary_date: String
      $teen_certification_date: String
      $teen_anniversary_date: String
      $sponsor_status: String
      $primary_organization_name: String
      $primary_organization_id: String
      $secondary_organization_name: String
      $secondary_organization_id: String
      $tertiary_organization_name: String
      $tertiary_organization_id: String
    ) {
      createUser(
        email: $email
        password: $password
        first_name: $first_name
        middle_name: $middle_name
        last_name: $last_name
        entry_reason: $entry_reason
        work_address_line1: $work_address_line1
        work_address_line2: $work_address_line2
        work_address_city: $work_address_city
        work_address_state: $work_address_state
        work_address_zipCode: $work_address_zipCode
        phone_number: $phone_number
        group_id: $group_id
        is_member: $is_member
        organization: $organization
        job_title: $job_title
        is_news_subscribed: $is_news_subscribed
        is_public: $is_public
        instructor_certificate_status: $instructor_certificate_status
        instructor_accredited_date: $instructor_accredited_date
        instructor_anniversary_date: $instructor_anniversary_date
        dietary_restriction: $dietary_restriction
        dietary_restriction_other: $dietary_restriction_other
        adult_certification_date: $adult_certification_date
        adult_anniversary_date: $adult_anniversary_date
        youth_certification_date: $youth_certification_date
        youth_anniversary_date: $youth_anniversary_date
        teen_certification_date: $teen_certification_date
        teen_anniversary_date: $teen_anniversary_date
        sponsor_status: $sponsor_status
        primary_organization_name: $primary_organization_name
        primary_organization_id: $primary_organization_id
        secondary_organization_name: $secondary_organization_name
        secondary_organization_id: $secondary_organization_id
        tertiary_organization_name: $tertiary_organization_name
        tertiary_organization_id: $tertiary_organization_id
      ) {
        id
        email
        password
      }
    }
  `;

  const { data, error } = await client.mutate({
    mutation: CREATE_USER,
    variables: {
      email,
      password,
      first_name,
      middle_name,
      last_name,
      entry_reason,
      work_address_line1,
      work_address_line2,
      work_address_city,
      work_address_state,
      work_address_zipCode,
      phone_number,
      group_id,
      is_member,
      organization,
      job_title,
      is_news_subscribed,
      is_public,
      instructor_certificate_status,
      instructor_accredited_date,
      instructor_anniversary_date,
      dietary_restriction,
      dietary_restriction_other,
      adult_certification_date,
      adult_anniversary_date,
      youth_certification_date,
      youth_anniversary_date,
      teen_certification_date,
      teen_anniversary_date,
      sponsor_status,
      primary_organization_name,
      primary_organization_id,
      secondary_organization_name,
      secondary_organization_id,
      tertiary_organization_name,
      tertiary_organization_id,
    },
  });
  if (error) return error;
  return data;
};

const checkUser = async (email, password) => {
  try {
    const GET_USER_BY_ID = gql`
      query CheckUser($email: String!, $password: String!) {
        CheckUser(email: $email, password: $password) {
          id
        }
      }
    `;
    const { data, error } = await client.query({
      query: GET_USER_BY_ID,
      variables: { email: email, password: password },
    });
    if (error) return error;
    return data;
  } catch (error) {
    console.log("catch---", error);
  }
};

const checkEmail = async (email) => {
  const GET_USERS = gql`
    query CheckUserEmail($email: String!) {
      CheckUserEmail(email: $email) {
        id
        email
        password
      }
    }
  `;
  const { data, error } = await client.query({
    query: GET_USERS,
    variables: { email: email },
  });
  if (error) return error;
  return data;
};

const getCourse = async () => {
  try {
    const GET_FIELDS = gql`
      query GetCourse {
        GetCourse {
          id
          course_title
          course_description
          status
          creation
        }
      }
    `;
    const { data, error } = await client.query({ query: GET_FIELDS });
    if (error) return error;
    return data;
  } catch (error) {
    console.log("catch---", error);
  }
};
const getGroup = async () => {
  try {
    const GET_FIELDS = gql`
      query Query {
        GetGroup {
          id
          group_name
          status
        }
      }
    `;
    const { data, error } = await client.query({ query: GET_FIELDS });
    if (error) return error;
    return data;
  } catch (error) {
    console.log("catch---", error);
  }
};

const getAssessmentDetail = async (assessment_id) => {
  console.log("assessment_id---", assessment_id);
  const GET_FIELDS = gql`
    query Query($assessment_id: Int!) {
      GetAssessmentDetail(assessment_id: $assessment_id) {
        id
        assessment_id
        qn_type
        qn
        opt1
        opt2
        opt3
        opt4
        answer
        opt_right
        weightage
        status
        creation
      }
    }
  `;
  const { data, error } = await client.query({
    query: GET_FIELDS,
    variables: { assessment_id },
  });
  if (error) return error;
  return data;
};

// const getAssessmentDetail = async (assessment_id) => {
//   try {
//     const GET_FIELDS = gql`
//       query Query($assessmentId: Int!) {
//         GetAssessmentDetail(assessment_id: $assessmentId) {
//           id
//           assessment_id
//           qn_type
//           qn
//           opt1
//           opt2
//           opt3
//           opt4
//           answer
//           opt_right
//           weightage
//           status
//           creation
//         }
//       }
//     `;
//     const { data, error } = await client.query({
//       query: GET_FIELDS,
//       variables: { assessment_id: assessment_id },
//     });
//     if (error) return error;
//     return data;
//   } catch (error) {
//     console.log("catch---", error);
//   }
// };

export default {
  getUsers,
  addUser,
  checkUser,
  checkEmail,
  getGroup,
  getCourse,
  getAssessmentDetail,
};
