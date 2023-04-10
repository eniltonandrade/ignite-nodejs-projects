# App

GymPass style app.

## FRs (Functional Requirements)

- [ ] Should be able to register;
- [ ] Should be able to authenticate;
- [ ] Should be able to get logged user profile;
- [ ] Should be able to get number of check-ins done by the logged user;
- [ ] Should be able to get the history of check-ins;
- [ ] Should be able to search for nearby gyms;
- [ ] Should be able to search a gym by its name;
- [ ] Should be able to check into a gym;
- [ ] Should be able to validate user's check in;
- [ ] Should be able to register a new gym;

## BSs (Business Rules)

- [ ] User shouldn't be able to register with an existent registered email;
- [ ] User can't do two check-ins at same day;
- [ ] User can't do the check-in if not in 100m away from the gym;
- [ ] Check-in can only be validated after 20 minutes after creation;
- [ ] Check-in can only be validated by admins;
- [ ] Gym can only be registered by admins;

## NFs (Non-functional Requirements)

- [ ] The user's password needs to be encrypted;
- [ ] The data of the application needs to be persisted on a PostGresSQL DB;
- [ ] All data lists needs to be paginated with 20 items per page;
- [ ] The user needs to be identified by JWT (JSON web token);