const profileImage = document.querySelector("#profile-image");
const profileContent = document.querySelector("#profile-data");

import { getProfileData } from "../api/profileFetch.js";

async function profileDataAdd() {
  try {
    const profileInfoContent = await getProfileData();

    console.log(profileInfoContent);

    profileImage.innerHTML = `
                <img class="object-fit-img border-radius-round profile-image" src="${profileInfoContent.data.avatar.url}" aria-label="Profile picture" width="200" height="200"/>
    `;

    profileContent.innerHTML = `
                <div>
                <div id="profile-username" class="fs-0-75-rem-md-1-rem mb-0">
                  <p>${profileInfoContent.data.name}</p>
                </div>
                <div id="profile-email" class="fs-0-75-rem-md-1-rem">
                  <p>${profileInfoContent.data.email}</p>
                </div>
              </div>
                <div class="fs-0-75-rem-md-1-rem pt-0 pt-md-3 pt-lg-4 pt-xl-5">
                  <p>Available credit: <span id="profile-credit" class="fs-0-75-rem-md-1-rem">${profileInfoContent.data.credits}</span></p>
                </div>
    `;
  } catch (error) {
    console.log(error);
  }
}

profileDataAdd();
