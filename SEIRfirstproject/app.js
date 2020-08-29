$.ajax({
  url: 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=064aa985e6b2fbe9bb5ec2df91ce2eef&hash=b8cc14b96f5398bf90378e4418693a52927beb9f'
}).then(
  (data) => {
    console.log('works');
  },
  (error) => {
      console.log('failed');
  }
)
