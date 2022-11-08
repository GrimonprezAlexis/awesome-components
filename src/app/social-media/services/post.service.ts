import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

/**
 * on n'ajoutee pas  { providedIn: 'root' }  au décorateur  @Injectable() .
 * Puisque SocialMediaModule est lazy-loaded et que PostsService ne sert qu'à l'intérieur de SocialMediaModule,
 * ça ne nous intéresse pas que ce service soit chargé à la racine de l'application.
 */
@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  addNewComment(postCommented: { comment: string, postId: number }) {
    console.log(postCommented);
  }

}
