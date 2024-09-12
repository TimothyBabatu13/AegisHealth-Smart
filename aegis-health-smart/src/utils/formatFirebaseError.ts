
const formatFirebaseError = (err : string) => {
  if(err === 'Firebase: Error (auth/network-request-failed).') return 'Check your network connectivity'
  return err;
}

export default formatFirebaseError