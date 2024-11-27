export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    CreateEmployer: undefined;
    InforEmployer: undefined;
    HomeEmployer: undefined;
    Profile: undefined;
    JobPost: undefined;
    JobList: undefined;
    CVCreate: undefined;
    InforEmployers: undefined;
    MessageScreen: undefined;
    CvDetail: undefined;
    ApplyManager: {jobId: string};
    InforManager: undefined;
    EmployerDetail: { jobId: string };
    CVManagerment: undefined;
    JobDetail: { jobId: string };
    ManageCVsApplied: undefined;
};
export default RootStackParamList;