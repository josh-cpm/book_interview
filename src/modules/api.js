import axios from 'axios';

const base_url = 'https://ipbf5lnnbl.execute-api.us-east-1.amazonaws.com/dev/';

export async function postMeeting(meetingUuid, participantDetails) {
  try {
    const response = await axios({
      method: 'post',
      url: `${base_url}/meet/meetings/${meetingUuid}`,
      data: {
        participantDetails,
      },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getScreener(screenerUuid) {
  try {
    const response = await axios.get(
      `${base_url}/meet/screeners/${screenerUuid}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}
