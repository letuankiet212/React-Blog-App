import { useState } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import Posts from './Components/Posts/Posts'
import AddPost from './Components/Posts/Post/AddPost'
import EditPost from './Components/Posts/Post/EditPost'
import SinglePostDetails from './Components/Posts/Post/SinglePostDetails'
import PageNotFound from './Components/PageNotFound'
import Navbar from './Components/Header/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Switch>
        <Route exact path="/" render={(props) => <Posts {...props} />} />
        <Route exact path="/posts" render={(props) => <Redirect to="/" />} />
        <Route path="/posts/add" render={(props) => <AddPost {...props}/>}/>
        <Route path="/posts/edit/:id" render={(props) => <EditPost {...props}/>}/>
        <Route path="/posts/:id" render={(props) => <SinglePostDetails {...props} />} />
        <Route path="/*" render={(props) => <PageNotFound {...props}/>}/>
      </Switch>
    </div>
  )
}

export default App
