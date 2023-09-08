import axios from "axios";

const BASEURL = "http://localhost:8080/api/v1";

export default axios.create({
	baseURL: BASEURL,
});
