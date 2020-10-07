const SET_FULL_USER_INFO_ABOUT = "SET_FULL_USER_INFO_ABOUT";

const OVERVIEW_ADD_A_WORKPLACE = "OVERVIEW_ADD_A_WORKPLACE";
const OVERVIEW_DELETE_A_WORKPLACE = "OVERVIEW_DELETE_A_WORKPLACE";

const OVERVIEW_ADD_A_HIGH_SCHOOL = "OVERVIEW_ADD_A_HIGH_SCHOOL";
const OVERVIEW_DELETE_A_HIGH_SCHOOL = "OVERVIEW_DELETE_A_HIGH_SCHOOL";

const OVERVIEW_ADD_A_COLLEGE = "OVERVIEW_ADD_A_COLLEGE";
const OVERVIEW_DELETE_A_COLLEGE = "OVERVIEW_DELETE_A_COLLEGE";

const OVERVIEW_ADD_A_CURRENT_CITY = "OVERVIEW_ADD_A_CURRENT_CITY";
const OVERVIEW_DELETE_A_CURRENT_CITY = "OVERVIEW_DELETE_A_CURRENT_CITY";

const OVERVIEW_ADD_A_HOMETOWN = "OVERVIEW_ADD_A_HOMETOWN";
const OVERVIEW_DELETE_A_HOMETOWN = "OVERVIEW_DELETE_A_HOMETOWN";

const OVERVIEW_ADD_A_RELATIONSHIP_STATUS = "OVERVIEW_ADD_A_RELATIONSHIP_STATUS";
const OVERVIEW_DELETE_A_RELATIONSHIP_STATUS =
  "OVERVIEW_DELETE_A_RELATIONSHIP_STATUS";

const PLACES_LIVED_ADD_A_CITY = "PLACES_LIVED_ADD_A_CITY";
const PLACES_LIVED_DELETE_A_CITY = "PLACES_LIVED_DELETE_A_CITY";

const CONTACT_AND_BASIC_INFO_ADD_ADDRESS = "CONTACT_AND_BASIC_INFO_ADD_ADDRESS";
const CONTACT_AND_BASIC_INFO_DELETE_ADDRESS =
  "CONTACT_AND_BASIC_INFO_DELETE_ADDRESS";

const CONTACT_AND_BASIC_INFO_ADD_MOBILE_PHONE =
  "CONTACT_AND_BASIC_INFO_ADD_MOBILE_PHONE";
const CONTACT_AND_BASIC_INFO_DELETE_MOBILE_PHONE =
  "CONTACT_AND_BASIC_INFO_DELETE_MOBILE_PHONE";

const CONTACT_AND_BASIC_INFO_ADD_WEBSITE = "CONTACT_AND_BASIC_INFO_ADD_WEBSITE";
const CONTACT_AND_BASIC_INFO_DELETE_WEBSITE =
  "CONTACT_AND_BASIC_INFO_DELETE_WEBSITE";

const CONTACT_AND_BASIC_INFO_ADD_SOCIAL_LINK =
  "CONTACT_AND_BASIC_INFO_ADD_SOCIAL_LINK";
const CONTACT_AND_BASIC_INFO_DELETE_SOCIAL_LINK =
  "CONTACT_AND_BASIC_INFO_DELETE_SOCIAL_LINK";

const CONTACT_AND_BASIC_INFO_ADD_GENDER = "CONTACT_AND_BASIC_INFO_ADD_GENDER";
const CONTACT_AND_BASIC_INFO_DELETE_GENDER =
  "CONTACT_AND_BASIC_INFO_DELETE_GENDER";

const CONTACT_AND_BASIC_INFO_ADD_LANGUAGE =
  "CONTACT_AND_BASIC_INFO_ADD_LANGUAGE";
const CONTACT_AND_BASIC_INFO_DELETE_LANGUAGE =
  "CONTACT_AND_BASIC_INFO_DELETE_LANGUAGE";

const CONTACT_AND_BASIC_INFO_ADD_BIRTHDAY =
  "CONTACT_AND_BASIC_INFO_ADD_BIRTHDAY";
const CONTACT_AND_BASIC_INFO_DELETE_BIRTHDAY =
  "CONTACT_AND_BASIC_INFO_DELETE_BIRTHDAY";

const CONTACT_AND_BASIC_INFO_ADD_INTERESTED_MALE =
  "CONTACT_AND_BASIC_INFO_ADD_INTERESTED_MALE";
const CONTACT_AND_BASIC_INFO_DELETE_INTERESTED_MALE =
  "CONTACT_AND_BASIC_INFO_DELETE_INTERESTED_MALE";

const CONTACT_AND_BASIC_INFO_ADD_POLITICAL_VIEWS =
  "CONTACT_AND_BASIC_INFO_ADD_POLITICAL_VIEWS";
const CONTACT_AND_BASIC_INFO_DELETE_POLITICAL_VIEWS =
  "CONTACT_AND_BASIC_INFO_DELETE_POLITICAL_VIEWS";

const CONTACT_AND_BASIC_INFO_ADD_RELIGION_VIEWS =
  "CONTACT_AND_BASIC_INFO_ADD_RELIGION_VIEWS";
const CONTACT_AND_BASIC_INFO_DELETE_RELIGION_VIEWS =
  "CONTACT_AND_BASIC_INFO_DELETE_RELIGION_VIEWS";

let initialState = {
  fullUserInfoAbout: null,
};

const aboutComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FULL_USER_INFO_ABOUT:
      return {
        ...state,
        fullUserInfoAbout: action.info,
      };

    // Workplace
    case OVERVIEW_ADD_A_WORKPLACE:
      return {
        ...state,

        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          WorkAndEducation: {
            ...state.fullUserInfoAbout.WorkAndEducation,
            WorkPlace: [
              ...state.fullUserInfoAbout.WorkAndEducation.WorkPlace,
              {
                company: action.company,
                position: action.position,
                city: action.city,
                description: action.description,
              },
            ],
          },
        },
      };

    case OVERVIEW_DELETE_A_WORKPLACE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          WorkAndEducation: {
            ...state.fullUserInfoAbout.WorkAndEducation,
            WorkPlace: [
              ...state.fullUserInfoAbout.WorkAndEducation.WorkPlace.slice(
                0,
                action.index
              ).concat(
                [...state.fullUserInfoAbout.WorkAndEducation.WorkPlace].slice(
                  action.index + 1,
                  [...state.fullUserInfoAbout.WorkAndEducation.WorkPlace].length
                )
              ),
            ],
          },
        },
      };

    // High School

    case OVERVIEW_ADD_A_HIGH_SCHOOL:
      return {
        ...state,

        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          WorkAndEducation: {
            ...state.fullUserInfoAbout.WorkAndEducation,
            HighSchool: [
              ...state.fullUserInfoAbout.WorkAndEducation.HighSchool,
              {
                school: action.school,
                description: action.description,
              },
            ],
          },
        },
      };

    case OVERVIEW_DELETE_A_HIGH_SCHOOL:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          WorkAndEducation: {
            ...state.fullUserInfoAbout.WorkAndEducation,
            HighSchool: [
              ...state.fullUserInfoAbout.WorkAndEducation.HighSchool.slice(
                0,
                action.index
              ).concat(
                [...state.fullUserInfoAbout.WorkAndEducation.HighSchool].slice(
                  action.index + 1,
                  [...state.fullUserInfoAbout.WorkAndEducation.HighSchool]
                    .length
                )
              ),
            ],
          },
        },
      };

    // College

    case OVERVIEW_ADD_A_COLLEGE:
      return {
        ...state,

        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          WorkAndEducation: {
            ...state.fullUserInfoAbout.WorkAndEducation,
            College: [
              ...state.fullUserInfoAbout.WorkAndEducation.College,
              {
                college: action.college,
                description: action.description,
              },
            ],
          },
        },
      };

    case OVERVIEW_DELETE_A_COLLEGE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          WorkAndEducation: {
            ...state.fullUserInfoAbout.WorkAndEducation,
            College: [
              ...state.fullUserInfoAbout.WorkAndEducation.College.slice(
                0,
                action.index
              ).concat(
                [...state.fullUserInfoAbout.WorkAndEducation.College].slice(
                  action.index + 1,
                  [...state.fullUserInfoAbout.WorkAndEducation.College].length
                )
              ),
            ],
          },
        },
      };

    // Current city

    case OVERVIEW_ADD_A_CURRENT_CITY:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          PlacesLived: {
            ...state.fullUserInfoAbout.PlacesLived,
            CurrentCity: action.currentCity,
          },
        },
      };

    case OVERVIEW_DELETE_A_CURRENT_CITY:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          PlacesLived: {
            ...state.fullUserInfoAbout.PlacesLived,
            CurrentCity: "",
          },
        },
      };

    // Hometown

    case OVERVIEW_ADD_A_HOMETOWN:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          PlacesLived: {
            ...state.fullUserInfoAbout.PlacesLived,
            HomeTown: action.hometown,
          },
        },
      };

    case OVERVIEW_DELETE_A_HOMETOWN:
      return {
        ...state,

        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          PlacesLived: {
            ...state.fullUserInfoAbout.PlacesLived,
            HomeTown: "",
          },
        },
      };

    // Relationship

    case OVERVIEW_ADD_A_RELATIONSHIP_STATUS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          FamilyAndRelationships: {
            ...state.fullUserInfoAbout.FamilyAndRelationships,
            Relationship: action.status,
          },
        },
      };

    case OVERVIEW_DELETE_A_RELATIONSHIP_STATUS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          FamilyAndRelationships: {
            ...state.fullUserInfoAbout.FamilyAndRelationships,
            Relationship: "",
          },
        },
      };

    // City

    case PLACES_LIVED_ADD_A_CITY:
      return {
        ...state,

        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          PlacesLived: {
            ...state.fullUserInfoAbout.PlacesLived,
            Cities: [
              ...state.fullUserInfoAbout.PlacesLived.Cities,
              {
                city: action.city,
                description: action.description,
              },
            ],
          },
        },
      };

    case PLACES_LIVED_DELETE_A_CITY:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          PlacesLived: {
            ...state.fullUserInfoAbout.PlacesLived,
            Cities: [
              ...state.fullUserInfoAbout.PlacesLived.Cities.slice(
                0,
                action.index
              ).concat(
                [...state.fullUserInfoAbout.PlacesLived.Cities].slice(
                  action.index + 1,
                  [...state.fullUserInfoAbout.PlacesLived.Cities].length
                )
              ),
            ],
          },
        },
      };

    // Address

    case CONTACT_AND_BASIC_INFO_ADD_ADDRESS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            Address: action.address,
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_ADDRESS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            Address: "",
          },
        },
      };

    // MobilePhone

    case CONTACT_AND_BASIC_INFO_ADD_MOBILE_PHONE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            MobilePhone: [
              ...state.fullUserInfoAbout.ContactInfo.MobilePhone,
              {
                number: action.number,
                description: action.description,
              },
            ],
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_MOBILE_PHONE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            MobilePhone: [
              ...state.fullUserInfoAbout.ContactInfo.MobilePhone.slice(
                0,
                action.index
              ).concat(
                [...state.fullUserInfoAbout.ContactInfo.MobilePhone].slice(
                  action.index + 1,
                  [...state.fullUserInfoAbout.ContactInfo.MobilePhone].length
                )
              ),
            ],
          },
        },
      };

    // Website

    case CONTACT_AND_BASIC_INFO_ADD_WEBSITE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            Websites: [
              ...state.fullUserInfoAbout.ContactInfo.Websites,
              {
                website: action.website,
                description: action.description,
              },
            ],
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_WEBSITE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            Websites: [
              ...state.fullUserInfoAbout.ContactInfo.Websites.slice(
                0,
                action.index
              ).concat(
                [...state.fullUserInfoAbout.ContactInfo.Websites].slice(
                  action.index + 1,
                  [...state.fullUserInfoAbout.ContactInfo.Websites].length
                )
              ),
            ],
          },
        },
      };

    // Social links

    case CONTACT_AND_BASIC_INFO_ADD_SOCIAL_LINK:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            SocialLinks: [
              ...state.fullUserInfoAbout.ContactInfo.SocialLinks,
              {
                link: action.link,
                description: action.description,
              },
            ],
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_SOCIAL_LINK:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          ContactInfo: {
            ...state.fullUserInfoAbout.ContactInfo,
            SocialLinks: [
              ...state.fullUserInfoAbout.ContactInfo.SocialLinks.slice(
                0,
                action.index
              ).concat(
                [...state.fullUserInfoAbout.ContactInfo.SocialLinks].slice(
                  action.index + 1,
                  [...state.fullUserInfoAbout.ContactInfo.SocialLinks].length
                )
              ),
            ],
          },
        },
      };

    // Gender

    case CONTACT_AND_BASIC_INFO_ADD_GENDER:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            Gender: action.gender,
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_GENDER:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            Gender: "",
          },
        },
      };

    // Language

    case CONTACT_AND_BASIC_INFO_ADD_LANGUAGE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            Language: action.language,
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_LANGUAGE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            Language: "",
          },
        },
      };

    // Birthday

    case CONTACT_AND_BASIC_INFO_ADD_BIRTHDAY:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            Birthday_data: action.data,
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_BIRTHDAY:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            Birthday_data: "",
          },
        },
      };

    // Interested male

    case CONTACT_AND_BASIC_INFO_ADD_INTERESTED_MALE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            InterestedMale: action.male,
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_INTERESTED_MALE:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            InterestedMale: "",
          },
        },
      };

    // Religion views

    case CONTACT_AND_BASIC_INFO_ADD_RELIGION_VIEWS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            ReligionViews: action.views,
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_RELIGION_VIEWS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            ReligionViews: "",
          },
        },
      };

    // Political views

    case CONTACT_AND_BASIC_INFO_ADD_POLITICAL_VIEWS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            PoliticalViews: action.views,
          },
        },
      };

    case CONTACT_AND_BASIC_INFO_DELETE_POLITICAL_VIEWS:
      return {
        ...state,
        fullUserInfoAbout: {
          ...state.fullUserInfoAbout,
          BasicInfo: {
            ...state.fullUserInfoAbout.BasicInfo,
            PoliticalViews: "",
          },
        },
      };

    default:
      return state;
  }
};

export const setFullUserInfoAbout = (info) => {
  return {
    type: SET_FULL_USER_INFO_ABOUT,
    info,
  };
};

// Workplace

export const overviewAddAWorkplace = (company, position, city, description) => {
  return {
    type: OVERVIEW_ADD_A_WORKPLACE,
    company,
    position,
    city,
    description,
  };
};

export const overviewDeleteAWorkplace = (index) => {
  return {
    type: OVERVIEW_DELETE_A_WORKPLACE,
    index,
  };
};

// High School

export const overviewAddAHighSchool = (school, description) => {
  return {
    type: OVERVIEW_ADD_A_HIGH_SCHOOL,
    school,
    description,
  };
};

export const overviewDeleteAHighSchool = (index) => {
  return {
    type: OVERVIEW_DELETE_A_HIGH_SCHOOL,
    index,
  };
};

// College

export const overviewAddACollege = (college, description) => {
  return {
    type: OVERVIEW_ADD_A_COLLEGE,
    college,
    description,
  };
};

export const overviewDeleteACollege = (index) => {
  return {
    type: OVERVIEW_DELETE_A_COLLEGE,
    index,
  };
};

// Current city

export const overviewAddACurrentCity = (currentCity) => {
  return {
    type: OVERVIEW_ADD_A_CURRENT_CITY,
    currentCity,
  };
};

export const overviewDeleteACurrentCity = () => {
  return {
    type: OVERVIEW_DELETE_A_CURRENT_CITY,
  };
};

// Hometown

export const overviewAddAHometown = (hometown) => {
  return {
    type: OVERVIEW_ADD_A_HOMETOWN,
    hometown,
  };
};

export const overviewDeleteAHometown = () => {
  return {
    type: OVERVIEW_DELETE_A_HOMETOWN,
  };
};

// Relationship status

export const overviewAddARelationshipStatus = (status) => {
  return {
    type: OVERVIEW_ADD_A_RELATIONSHIP_STATUS,
    status,
  };
};

export const overviewDeleteARelationshipStatus = () => {
  return {
    type: OVERVIEW_DELETE_A_RELATIONSHIP_STATUS,
  };
};

// Relationship status

export const placeslivedAddACity = (city, description) => {
  return {
    type: PLACES_LIVED_ADD_A_CITY,
    city,
    description,
  };
};

export const placeslivedDeleteACity = (index) => {
  return {
    type: PLACES_LIVED_DELETE_A_CITY,
    index,
  };
};

// Adress

export const contactAndBasicInfoAddAddress = (address, description) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_ADDRESS,
    address,
    description,
  };
};

export const contactAndBasicInfoDeleteAddress = () => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_ADDRESS,
  };
};

// Mobile phone

export const contactAndBasicInfoAddMobilePhone = (number, description) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_MOBILE_PHONE,
    number,
    description,
  };
};

export const contactAndBasicInfoDeleteMobilePhone = (index) => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_MOBILE_PHONE,
    index,
  };
};

// Website

export const contactAndBasicInfoAddWebsite = (website, description) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_WEBSITE,
    website,
    description,
  };
};

export const contactAndBasicInfoDeleteWebsite = (index) => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_WEBSITE,
    index,
  };
};

// Social link

export const contactAndBasicInfoAddSocialLink = (link, description) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_SOCIAL_LINK,
    link,
    description,
  };
};

export const contactAndBasicInfoDeleteSocialLink = (index) => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_SOCIAL_LINK,
    index,
  };
};

// Gender

export const contactAndBasicInfoAddGender = (gender) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_GENDER,
    gender
  };
};

export const contactAndBasicInfoDeleteGender = () => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_GENDER,
  };
};

// Language

export const contactAndBasicInfoAddLanguage = (language) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_LANGUAGE,
    language
  };
};

export const contactAndBasicInfoDeleteLanguage = () => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_LANGUAGE,
  };
};

// Interested male

export const contactAndBasicInfoAddInterestedMale = (male) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_INTERESTED_MALE,
    male
  };
};

export const contactAndBasicInfoDeleteInterestedMale = () => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_INTERESTED_MALE,
  };
};

// Bithday data

export const contactAndBasicInfoAddBirthday = (data) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_BIRTHDAY,
    data
  };
};

export const contactAndBasicInfoDeleteBirthday = () => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_BIRTHDAY,
  };
};

// Religion views

export const contactAndBasicInfoAddReligionViews = (views) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_RELIGION_VIEWS,
    views
  };
};

export const contactAndBasicInfoDeleteReligionViews = () => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_RELIGION_VIEWS,
  };
};

// Political Views

export const contactAndBasicInfoAddPoliticalViews = (views) => {
  return {
    type: CONTACT_AND_BASIC_INFO_ADD_POLITICAL_VIEWS,
    views
  };
};

export const contactAndBasicInfoDeletePoliticalViews = () => {
  return {
    type: CONTACT_AND_BASIC_INFO_DELETE_POLITICAL_VIEWS,
  };
};

export default aboutComponentReducer;
