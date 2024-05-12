import { Component, OnInit } from '@angular/core';
import { GetPersonResponseDto } from '../../types/person.types';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../types/http.types';
import { baseUrl } from '../../config/constants';
import { Bell, Settings } from 'angular-feather/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPerson('1');
  }

  Bell = Bell;
  Settings = Settings;

  person: any;

  getPerson(id: string): GetPersonResponseDto | undefined {
    this.http
      .get<HttpResponse<GetPersonResponseDto>>(`${baseUrl}persons/${id}`)
      .subscribe((data) => {
        const { id, firstName, lastName, email, permissions } = data.payload;
        this.person = { id, firstName, lastName, email, permissions };
      });

    return this.person;
  }
}
