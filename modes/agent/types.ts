export type ActionType = 
    'file_create' |
    'file_modify' |
    'file_delete' |
    'folder_create' |
    'code_analysis' |
    'tool_execute'


    export type ActionStatus = 'pending' | 'executed' | 'approved' | 'rejected'

    export interface ActionLog {
        id: string;
        timestamp: Date;
        action: ActionType;
        result: string;
        error: string;
        user: string;
        agent: string;
        environment: string;
        system: string;
        prompt: string;
        response: string;
        type: 'ActionType'
        path: string;
        details: {
            before?: string;
            after?: string;
            tool_name?: string;
            tool_args?: string;
            tool_result?: string;
            tool_error?: string;
            toolResult? :string;
            
            
        }
       status: ActionStatus;
       userApproved: boolean;
    }

    export interface AgentConfig {
        codebasePath: string;
        maxFileSizeToRead: number;
        excludePatterns: string[];
        tools: {
            allowShellExecution: boolean;
            allowFileModification: boolean;
            allowFileCreation: boolean;
            allowFolderCreation: boolean;
        }

    }

    export const defaultAgentConfig = (): AgentConfig => ({
        codebasePath: process.cwd(),
        maxFileSizeToRead: 1024 * 1024,
        excludePatterns: [
            'node_modules',
            '.git',
            'dist',
            'build',
            'next',
            '.log',
            '.env*'
        ],
        tools: {
            allowShellExecution: true,
            allowFileCreation: true,
            allowFileModification: true,
            allowFolderCreation: true,

        },
    })

    export function isMutationType(t: ActionType): boolean {
        return (
            t === 'file_create' ||
            t === 'file_modify' ||
            t === 'folder_create' ||
            t === 'file_delete' ||
            t === 'tool_execute'

        );
    }