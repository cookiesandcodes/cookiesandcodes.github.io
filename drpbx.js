const transloadit = new TransloaditClient({
  authKey: 'dfc86e53b40c4add9db37be5f120ad77',
  authSecret: '7b900bd25f364523a71e4fb50ae5a5aeb4750c0f'
})

transloadit.addFile('myfile_1', './chameleon.jpg')

const options = {
  params: {
    template_id: '88c2565e31dd405ab330ccbfd92ae03f',
  }
}

transloadit.createAssembly(options, (err, result) => {
  if (err) {
    throw err
  }

  console.log({result})
})