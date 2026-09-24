export const openPlotSchema = {
    fields: ['name', 'phone', 'location', 'size'],
    required: ['name', 'phone', 'location']
};
export const reCompaniesSchema = {
    fields: ['companyName', 'contactPerson', 'email', 'phone', 'teamSize'],
    required: ['companyName', 'contactPerson', 'email', 'phone']
};
export const reTrainersSchema = {
    fields: ['name', 'experience', 'expertise', 'linkedin', 'resume'],
    required: ['name', 'experience', 'linkedin']
};
export const contactSchema = {
    fields: ['name', 'email', 'subject', 'message'],
    required: ['name', 'email', 'message']
};
