const initialState = {
  vacancies: [],
  allVacancies: [],
  vacancyDetail: [],
  business: [],
  profiles: [],
  allProfiles: [],
  postulados: [],
  allPostulados: [],
  detailPostulante: [],
  technology: [],
  seniority: [],
  skill: [],
  language: [],
  pipeline: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_VACANCY":
      return {
        ...state,
      };
    case "POST_EMPRESA":
      return {
        ...state,
      };
    case "GET_VACANCY":
      return {
        ...state,
        vacancies: action.payload,
        allVacancies: action.payload,
      };
    case "GET_PROFILES":
      return {
        ...state,
        profiles: action.payload,
        allProfiles: action.payload,
      };
    case "GET_BISSNESS_DETAIL":
      return {
        ...state,
        business: action.payload,
      };
    case "GET_POSTULADOS":
      return {
        ...state,
        postulados: action.payload,
        allPostulados: action.payload,
      };
    case "GET_DETAIL_POSTULANTE":
      return {
        ...state,
        detailPostulante: action.payload,
      };
    case "CLEAR_DETAIL":
      return {
        ...state,
        profiles: [],
      };
    case "GET_TECH":
      return {
        ...state,
        technology: action.payload,
      };
    case "GET_SENIORITY":
      return {
        ...state,
        seniority: action.payload,
      };
    case "GET_SKILLS":
      return {
        ...state,
        skill: action.payload,
      };
    case "GET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    case "GET_STATUS_PIPELINE":
      return {
        ...state,
        pipeline: action.payload,
      };
    case "BY_TECH":
      const allProf1 = state.allProfiles;
      const techs = state.technology;
      const filterByActivity =
        action.payload === "All"
          ? allProf1
          : techs
              .filter((a) => a.name === action.payload)[0]
              .profiles.map((e) => e);
      return {
        ...state,
        profiles: filterByActivity,
      };
    case "BY_SENIOR":
      const allProf2 = state.allProfiles;
      const senior = state.seniority;
      const filterBySenuirity =
        action.payload === "All"
          ? allProf2
          : senior
              .filter((a) => a.name === action.payload)[0]
              .profiles.map((e) => e);
      return {
        ...state,
        profiles: filterBySenuirity,
      };
    case "BY_SKILLS":
      const allProf3 = state.allProfiles;
      const skills = state.skill;
      const filterBySkills =
        action.payload === "All"
          ? allProf3
          : skills
              .filter((a) => a.name === action.payload)[0]
              .profiles.map((e) => e);
      return {
        ...state,
        profiles: filterBySkills,
      };
    case "BY_LENGUAGE":
      const allProf4 = state.allProfiles;
      const lenguage = state.language;
      const filterByLenguage =
        action.payload === "All"
          ? allProf4
          : lenguage
              .filter((a) => a.name === action.payload)[0]
              .profiles.map((e) => e);
      return {
        ...state,
        profiles: filterByLenguage,
      };
    case "GET_VACANCY_ID":
      return { ...state, vacancyDetail: action.payload };

    default:
      return state;
  }
}

export default rootReducer;
