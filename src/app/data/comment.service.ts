import {Comment} from './comment';

export let Comments:Comment[]=[];
export class CommentService{
  public AddComment(com:Comment){
    com.id=this.GetMaxId();
    Comments.push(com);
  }

  public GetBlogComments(blogId:number):Comment[]{
    return Comments.filter(item=>item.blogId==blogId);
  }


  private GetMaxId():number{
    let maxId=1;
    Comments.forEach(item=>{
      if(item.id>maxId){
        maxId=item.id;
      }
    });
    return maxId;
  }
}
