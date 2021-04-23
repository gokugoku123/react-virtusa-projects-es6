import { render, screen, fireEvent } from '@testing-library/react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import Blog from '../components/Blog/Blog';

describe('Testing Blog', () => {
    test('testcase1', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);

        const noArticleFound = screen.getByText('No Articles Found');

        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');

    })

    test('testcase2', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);


        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');
        
        let previewContainer = screen.queryByTestId('previewContainer');
        expect(previewContainer).toBeNull();

        const editorPreviewTogglebutton = screen.getByTestId('editorPreviewToggler');
        fireEvent.click(editorPreviewTogglebutton);

        previewContainer = screen.queryByTestId('previewContainer');
        expect(previewContainer).toBeTruthy();

        

    })

    test('testcase3', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);


        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');
        
        const editorInputArticlename = screen.getByTestId('inputArticleName');
        const editorArticleDescription = screen.getByTestId('inputArticleDescription');
        const editorArticleSubmitButton = screen.getByTestId('editorSubmit');
        
        
        fireEvent.change(editorInputArticlename, {target : { value : 'Test Name' }});
        fireEvent.change(editorArticleDescription, {target : { value : '' }});
        expect(editorArticleSubmitButton).toBeDisabled();
        fireEvent.change(editorArticleDescription, {target : { value : '# Test Unique Description #1' }});
        expect(editorArticleSubmitButton).not.toBeDisabled();
        expect(editorInputArticlename).toBeRequired();

    })

    test('testcase4', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);


        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');
        
        const editorInputArticlename = screen.getByTestId('inputArticleName');
        const editorArticleDescription = screen.getByTestId('inputArticleDescription');
        const editorArticleSubmitButton = screen.getByTestId('editorSubmit');
        
        
        fireEvent.change(editorInputArticlename, {target : { value : 'Test Name' }});
        fireEvent.change(editorArticleDescription, {target : { value : '# Test Unique Description #1' }});

        fireEvent.submit(screen.getByTestId('editorForm'), {
            target : [
                { value : 'Test Name' },
                { value : '# Test Description' }
            ]
        });

        expect(screen.getByTestId('AllArticlesContainer')).toBeTruthy();
    })

    test('testcase5', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);


        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');
        
        const editorInputArticlename = screen.getByTestId('inputArticleName');
        const editorArticleDescription = screen.getByTestId('inputArticleDescription');
        const editorArticleSubmitButton = screen.getByTestId('editorSubmit');
        
        
        fireEvent.change(editorInputArticlename, {target : { value : 'Test Name' }});
        fireEvent.change(editorArticleDescription, {target : { value : '# Test Unique Description #1' }});

        fireEvent.submit(screen.getByTestId('editorForm'), {
            target : [
                { value : 'Test Name' },
                { value : '# Test Description' }
            ]
        });

        expect(screen.getByTestId('AllArticlesContainer')).toBeTruthy();

        let blogArticleNames = screen.queryAllByRole('heading');

        for(let i = 0; i < blogArticleNames.length; i++) {
            if(blogArticleNames[i].textContent === 'Test Name') {
                expect(true).toBeTruthy();
                break;
            }
        }

    })

    test('testcase6', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);


        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');
        
        const editorInputArticlename = screen.getByTestId('inputArticleName');
        const editorArticleDescription = screen.getByTestId('inputArticleDescription');
        const editorArticleSubmitButton = screen.getByTestId('editorSubmit');
        
        
        fireEvent.change(editorInputArticlename, {target : { value : 'Test Name Unique Value' }});
        fireEvent.change(editorArticleDescription, {target : { value : '# Test Unique Description #1' }});

        fireEvent.submit(screen.getByTestId('editorForm'), {
            target : [
                { value : 'Test Name Unique Value' },
                { value : '# Test Description' }
            ]
        });

        expect(screen.getByTestId('AllArticlesContainer')).toBeTruthy();

        let blogArticleNames = screen.queryAllByRole('heading');
        let flagVerify = false;

        for(let i = 0; i < blogArticleNames.length; i++) {
            if(blogArticleNames[i].textContent === 'Test Name Unique Value') {
                flagVerify = true;
                break;
            }
        }

        expect(flagVerify).toBeTruthy();
    })

    test('testcase7', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);


        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');
        
        const editorInputArticlename = screen.getByTestId('inputArticleName');
        const editorArticleDescription = screen.getByTestId('inputArticleDescription');
        
        
        fireEvent.change(editorInputArticlename, {target : { value : 'Test Name Unique Value' }});
        fireEvent.change(editorArticleDescription, {target : { value : '# Test Unique Description #1' }});

        fireEvent.submit(screen.getByTestId('editorForm'), {
            target : [
                { value : 'Test Name Unique Value' },
                { value : '# Test Unique Description #1' }
            ]
        });

        expect(screen.getByTestId('AllArticlesContainer')).toBeTruthy();
        const readMoreLinks = screen.getByText('Read More');
        fireEvent.click(readMoreLinks);

        const markdownContainer = screen.getByTestId('MarkdownContainer');
        const articleTitle = screen.getByTestId('ArticleTitle');
        const createdAt = screen.getByTestId('CreatedAt');

        const dateNow = new Date().toLocaleDateString();

        expect(articleTitle.textContent.includes('Test Name')).toBeTruthy();
        expect(createdAt.textContent.includes(dateNow)).toBeTruthy();

        let blogArticleHeadings = screen.queryAllByRole('heading');
        let flagVerify = false;

        for(let i = 0; i < blogArticleHeadings.length; i++) {
            // console.log(blogArticleHeadings[i].textContent);
            if(blogArticleHeadings[i].textContent === 'Test Unique Description #1') {
                flagVerify = true;
                break;
            }
        }

        expect(flagVerify).toBeTruthy();
    })


    test('testcase8', () => {
        const { rerender } = render(<MemoryRouter><Blog/></MemoryRouter>);


        const composeLink = screen.getByTestId('composeLink');
        fireEvent.click(composeLink);

        const editorContainer = screen.getByTestId('editorContainer');
        
        const editorInputArticlename = screen.getByTestId('inputArticleName');
        const editorArticleDescription = screen.getByTestId('inputArticleDescription');
        
        
        fireEvent.change(editorInputArticlename, {target : { value : 'Test Name' }});
        fireEvent.change(editorArticleDescription, {target : { value : '# Test Unique Description #1' }});

        fireEvent.submit(screen.getByTestId('editorForm'), {
            target : [
                { value : 'Test Name' },
                { value : '# Test Unique Description #1' }
            ]
        });

        expect(screen.getByTestId('AllArticlesContainer')).toBeTruthy();
        const deleteArticle = screen.getByTestId('deleteArticle');

        fireEvent.click(deleteArticle);

        expect(screen.queryAllByTestId('blogArticle').length).toBe(0);

    })

    
})